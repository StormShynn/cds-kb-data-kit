---
name: I_CNSLDTNTASKLOGITEMTYPET
description: "Cnsldtntasklogitemtypet"
app_component: FIN-CS-COR-IS-2CL
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
  - FIN-CS-COR
  - interface-view
  - item-level
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTASKLOGITEMTYPET

**Cnsldtntasklogitemtypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_DomainT.Language as spras preserving type )` |  |  |
| `CnsldtnTaskLogItemType` | ✓ | |  | `cast(left(_DomainT.DomainValue, 2) as fincs_lineitemtype preserving type )` |  |  |
| `CnsldtnTaskLogItemTypeText` |  | |  | `cast(_DomainT.DomainValueText as fincs_logitemtype_text preserving type )` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_TaskLogItemType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaskLogItemType` | `I_CnsldtnTaskLogItemType` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'CnsldtnTaskLogItemType',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ],
    sapObjectNodeType.name: 'CnsldtnTaskLogItemTypeText'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Task Log Item Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnTaskLogItemTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FINCS_LINEITEMTYPE') as _DomainT

  association [1..1] to I_CnsldtnTaskLogItemType as _TaskLogItemType on $projection.CnsldtnTaskLogItemType = _TaskLogItemType.CnsldtnTaskLogItemType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(_DomainT.Language as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_TaskLogItemType'
  key cast(left(_DomainT.DomainValue, 2) as fincs_lineitemtype preserving type ) as CnsldtnTaskLogItemType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(_DomainT.DomainValueText as fincs_logitemtype_text preserving type )  as CnsldtnTaskLogItemTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _TaskLogItemType,
      _DomainT._Language
};
```
