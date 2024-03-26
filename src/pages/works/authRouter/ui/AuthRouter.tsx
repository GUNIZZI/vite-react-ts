import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const AuthRouter = () => {
    return (
        <div>
            <div>Auth Router</div>
            <div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<LogoutOutlined />} />
                </Tooltip>
            </div>
        </div>
    );
};

export { AuthRouter };
