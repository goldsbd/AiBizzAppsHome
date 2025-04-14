
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface AppCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats?: {
    label: string;
    value: string | number;
    trend?: string;
    trendValue?: string;
    trendUp?: boolean;
  }[];
  headerStyle: string;
  linkTo: string;
}

const AppCard: FC<AppCardProps> = ({
  title,
  description,
  icon,
  stats,
  headerStyle,
  linkTo,
}) => {
  return (
    <Card className="bg-card-gradient border-white/10 overflow-hidden hover:card-glow transition-all duration-300">
      <CardHeader className={`geometric-header ${headerStyle} p-4 flex flex-row justify-between items-center`}>
        <div className="flex items-center space-x-2">
          <div className="bg-white/10 p-2 rounded-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <Button variant="ghost" size="icon" asChild className="text-white/80 hover:text-white hover:bg-white/10">
          <Link to={linkTo} aria-label={`View ${title}`}>
            <ExternalLink size={18} />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="p-5">
        <p className="text-white/80 mb-4">{description}</p>
        
        {stats && stats.length > 0 && (
          <div className="border-t border-white/10 pt-4 mt-4 space-y-4">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-white/60">{stat.label}</span>
                  {stat.trend && (
                    <div className={`flex items-center text-sm ${stat.trendUp ? 'text-aiba-accent-green' : stat.trendUp === false ? 'text-aiba-accent-red' : 'text-white/60'}`}>
                      <span>Trend (30d)</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  {stat.trendValue && (
                    <div className={`flex items-center ${stat.trendUp ? 'text-aiba-accent-green' : stat.trendUp === false ? 'text-aiba-accent-red' : 'text-white/60'}`}>
                      {stat.trendUp ? '↗ ' : stat.trendUp === false ? '↘ ' : ''}
                      {stat.trendValue}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Button asChild className="w-full mt-4 bg-white/10 hover:bg-white/20 transition-colors">
          <Link to={linkTo}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppCard;
