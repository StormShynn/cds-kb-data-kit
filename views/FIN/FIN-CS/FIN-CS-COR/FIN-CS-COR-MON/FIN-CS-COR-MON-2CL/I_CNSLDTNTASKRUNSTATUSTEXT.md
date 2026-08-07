---
name: I_CNSLDTNTASKRUNSTATUSTEXT
description: Cnsldtntaskrunstatustext
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - text-view
  - text
  - status
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKRUNSTATUSTEXT

**Cnsldtntaskrunstatustext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( DomainText.ddlanguage as spras preserving type )` |  |  |
| `ConsolidationTaskRunStatus` | ✓ | |  | `cast( left( DomainText.domvalue_l,2 ) as fincs_taskrun_status preserving type )` |  |  |
| `ConsolidationTaskRunStatusText` |  | |  | `cast( DomainText.ddtext as fincs_taskrun_status_txt preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_CnsldtnTaskRunStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTaskRunStatus` | `I_CnsldtnTaskRunStatus` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKRUNSTST',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #B,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationTaskRunStatus',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Run Status - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnTaskRunStatusText as 
  select from dd07t as DomainText
    
    association [1..1] to I_CnsldtnTaskRunStatus  as _CnsldtnTaskRunStatus   on $projection.ConsolidationTaskRunStatus = _CnsldtnTaskRunStatus.ConsolidationTaskRunStatus
    association [1..1] to I_Language              as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( DomainText.ddlanguage as spras preserving type )                          as Language,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTaskRunStatus'
  key cast( left( DomainText.domvalue_l,2 ) as fincs_taskrun_status preserving type ) as ConsolidationTaskRunStatus,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking:#LOW,
        fuzzinessThreshold: 0.7
      }
      cast( DomainText.ddtext as fincs_taskrun_status_txt preserving type )           as ConsolidationTaskRunStatusText,
      
      @Consumption.hidden: true
      @Analytics.hidden: true
      DomainText.domvalue_l                                                           as DomainValue,
      
      _CnsldtnTaskRunStatus,
      _Language
}
where
      DomainText.domname  = 'FC_STATUS'
  and DomainText.as4local = 'A';
```
