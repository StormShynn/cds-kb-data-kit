---
name: I_CNSLDTNTASKLOGITEMTYPET
description: "Cnsldtntasklogitemtypet"
app_component: FIN-CS-COR-IS-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
