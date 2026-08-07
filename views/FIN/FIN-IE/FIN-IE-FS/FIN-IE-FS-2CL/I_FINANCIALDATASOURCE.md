---
name: I_FINANCIALDATASOURCE
description: Financialdatasource
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINANCIALDATASOURCE

**Financialdatasource**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialDataSource` | ✓ | |  | `datasource_id` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Financial Data Source'
@ObjectModel:{
    representativeKey: 'FinancialDataSource',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    sapObjectNodeType.name: 'FinancialDataSource',
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@Search.searchable: true
@Metadata: {
ignorePropagatedAnnotations: true,
allowExtensions: true
}

define root view entity I_FinancialDataSource
  as select from ffs_d_datasrce
  composition [0..*] of I_FinancialDataSourceT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key datasource_id as FinancialDataSource,

      /* Associations */
      _Text

}
```
