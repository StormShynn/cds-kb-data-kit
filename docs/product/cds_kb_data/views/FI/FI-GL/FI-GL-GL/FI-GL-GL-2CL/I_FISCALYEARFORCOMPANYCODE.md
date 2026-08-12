---
name: I_FISCALYEARFORCOMPANYCODE
description: "FISCALYEARFORCompany Code"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - company-code
  - component:FI-GL-GL-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_FISCALYEARFORCOMPANYCODE

**FISCALYEARFORCompany Code**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type )` |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year for Company Code'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFIFYEARCC'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
@ObjectModel.sapObjectNodeType.name: 'FiscalYear'

define view entity I_FiscalYearForCompanyCode as select from I_FiscalCalendarDate as I_FiscalCalendarDate inner join I_CompanyCode as I_CompanyCode
                                                 on   I_FiscalCalendarDate.FiscalYearVariant = I_CompanyCode.FiscalYearVariant
                                                 
association [0..1] to I_CompanyCode  as _CompanyCode  on $projection.CompanyCode  = _CompanyCode.CompanyCode

{
  
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( I_CompanyCode.CompanyCode as fis_bukrs preserving type ) as CompanyCode,

key I_FiscalCalendarDate.FiscalYear,

    I_FiscalCalendarDate.FiscalYearStartDate,
    I_FiscalCalendarDate.FiscalYearEndDate,

//    Next functionality deleted to get BASIC view with 3 tables   
//    cast( NextFiscalYear as fins_next_fiscalyear )               as NextFiscalYear,
//    cast( NextFiscalYearStartDate as fins_next_fyear_startdate ) as NextFiscalYearStartDate,
//    cast( NextFiscalYearEndDate as fins_next_fyear_enddate )     as NextFiscalYearEndDate,

    _CompanyCode        

} group by I_CompanyCode.CompanyCode, I_FiscalCalendarDate.FiscalYear, I_FiscalCalendarDate.FiscalYearStartDate, I_FiscalCalendarDate.FiscalYearEndDate
```
