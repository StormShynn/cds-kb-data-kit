---
name: I_CNSLDTNSUBASSIGNMENT
description: "Cnsldtnsubassignment"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBASSIGNMENT

**Cnsldtnsubassignment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSubassignment` | ✓ | |  | `cast(case rollname when 'RTCUR' then 'TransactionCurrency' when 'FC_BUPTR' then 'PartnerConsolidationUnit' when 'FC_SITYP' then 'SubItemCategory' when 'FC_SITEM' then 'SubItem' when 'MEINS' then 'BaseUnit' else '' end as fincs_subassignment )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSubassignmentT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUBASSGMT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'CnsldtnSubassignment',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationSubassignment'
  }
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Subassignment'

// no search on code list

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnSubassignment
  as select from dd04l

  association [0..*] to I_CnsldtnSubassignmentT as _Text on $projection.CnsldtnSubassignment = _Text.CnsldtnSubassignment

{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnSubassignmentVH', element: 'CnsldtnSubassignment' } }]
  key cast(case rollname
    when 'RTCUR' then  'TransactionCurrency'
    when 'FC_BUPTR' then  'PartnerConsolidationUnit'
    when 'FC_SITYP' then  'SubItemCategory'
    when 'FC_SITEM' then 'SubItem'
    when 'MEINS' then 'BaseUnit'
    else ''
    end as fincs_subassignment ) as CnsldtnSubassignment,


      _Text
}
where
  (
       rollname = 'RTCUR'
    or rollname = 'FC_BUPTR'
    or rollname = 'FC_SITYP'
    or rollname = 'FC_SITEM'
    or rollname = 'MEINS'
  )
  and  as4local = 'A'
```
