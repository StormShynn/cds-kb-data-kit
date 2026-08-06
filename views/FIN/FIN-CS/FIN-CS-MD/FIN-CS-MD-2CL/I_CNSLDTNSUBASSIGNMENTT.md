---
name: I_CNSLDTNSUBASSIGNMENTT
description: Cnsldtnsubassignmentt
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNSUBASSIGNMENTT

**Cnsldtnsubassignmentt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(ddlanguage as spras preserving type )` |
| key `CnsldtnSubassignment` | `cast(case rollname when 'RTCUR' then 'TransactionCurrency' when 'FC_BUPTR' then 'PartnerConsolidationUnit' when 'FC_SITYP' then 'SubItemCategory' when 'FC_SITEM' then 'SubItem' when 'MEINS' then 'BaseUnit' else '' end as fincs_subassignment )` |
| `CnsldtnSubassignmentText` | `cast ( scrtext_l as fincs_subassignmenttext preserving type )` |
| `_Language` | *Association* |
| `_CnsldtnSubassignment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1] |
| `_CnsldtnSubassignment` | `I_CnsldtnSubassignment` | [1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUBASSGMTT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
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
  dataCategory: #TEXT,
  representativeKey: 'CnsldtnSubassignment',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Subassignment - Text'

// no search on code list

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnSubassignmentT
  as select from dd04t

  association [1] to I_Language             as _Language             on $projection.Language = _Language.Language

  association [1] to I_CnsldtnSubassignment as _CnsldtnSubassignment on $projection.CnsldtnSubassignment = _CnsldtnSubassignment.CnsldtnSubassignment

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type )                     as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnSubassignment'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnSubassignmentVH', element: 'CnsldtnSubassignment' } }]
  key cast(case rollname
    when 'RTCUR' then  'TransactionCurrency'
    when 'FC_BUPTR' then  'PartnerConsolidationUnit'
    when 'FC_SITYP' then  'SubItemCategory'
    when 'FC_SITEM' then 'SubItem'
    when 'MEINS' then 'BaseUnit'
    else ''
    end as fincs_subassignment )                                     as CnsldtnSubassignment,

      @Semantics.text: true
      cast ( scrtext_l as fincs_subassignmenttext preserving type ) as CnsldtnSubassignmentText,


      // associations
      _CnsldtnSubassignment,
      _Language
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
