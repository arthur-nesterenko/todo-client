import classNames from 'classnames'


type FiltersProps = {
    className?: string,
    onChange: (filter: boolean | null) => void
    activeFilter: boolean | null,

}


const filters = [
    {
        label: 'All',
        value: null
    },
    {
        label: 'Completed',
        value: true
    },
    {
        label: 'Incompleted',
        value: false
    }
]


const Filters = ({className, onChange, activeFilter}: FiltersProps) => {


    return <div className={classNames('flex items-center space-x-4', className)}>
        <span className='show-text'>Show:</span>
        <div className='flex items-center space-x-2.5'>
            {filters.map(filter =>
                <button key={filter.label} className={classNames(
                    'text-style-6',
                    {'underline !text-[#4a77e5]': filter.value !== activeFilter},
                )} onClick={() => onChange(filter.value)}>{filter.label}</button>
            )}
        </div>
    </div>
}

export default Filters
