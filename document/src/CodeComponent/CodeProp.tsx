type CodeProps = {
  propsList: {
    propName: string;
    description: string;
    propType?: string;
    default?: string;
  }[];
};

export default ({ propsList }: CodeProps) => {
  const Columns = [
    { label: '属性名', field: 'propName' },
    { label: '说明', field: 'description' },
    { label: '类型', field: 'propType' },
    { label: '默认值', field: 'default' },
  ];

  return (
    <>
    <h3>属性</h3>
    <table className="table-auto" style={{display: "table", width: '100%'}}>
      <thead>
        {Columns.map(({ label, field }) => (
          <th key={field}>{label}</th>
        ))}
      </thead>
      {
        propsList?.map(({ propName, description, propType, default: defaultValue }) => (
          <tr key={propName}>
            <td>{propName}</td>
            <td>{description}</td>
            <td>{propType || '无'}</td>
            <td>{defaultValue || '无'}</td>
          </tr>
        ))
      }
    </table>
    </>
  );
};
