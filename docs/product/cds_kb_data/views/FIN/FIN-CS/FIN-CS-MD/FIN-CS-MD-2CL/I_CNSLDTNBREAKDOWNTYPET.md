---
name: I_CNSLDTNBREAKDOWNTYPET
description: "Cnsldtnbreakdowntypet"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBREAKDOWNTYPET

**Cnsldtnbreakdowntypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `ConsolidationBreakdownType` | ✓ | |  | `cast(_DomainT.DomainValue as fincs_breakdowntype )` |  |  |
| `ConsolidationBreakdownTypeText` |  | |  | `cast(_DomainT.DomainValueText as fincs_breakdowntype_text preserving type )` |  |  |
| `DomainValue` |  | | `_DomainT` | `DomainValue` |  |  |
| `_BreakdownType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BreakdownType` | `I_CnsldtnBreakdownType` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCBRKDWNTYPET',
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
    serviceQuality: #A,
    sizeCategory: #S},
  dataCategory: #TEXT,
  representativeKey: 'ConsolidationBreakdownType',
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
@EndUserText.label: 'Consolidation Breakdown Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBreakdownTypeT
  as select from P_CnsldtnDomainText(P_DomainName : 'FC_BRKDOWN') as _DomainT

  association [1..1] to I_CnsldtnBreakdownType as _BreakdownType on $projection.ConsolidationBreakdownType = _BreakdownType.ConsolidationBreakdownType

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_DomainT.Language as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_BreakdownType'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownTypeVH', element: 'ConsolidationBreakdownType' } }]
  key cast(_DomainT.DomainValue as fincs_breakdowntype )                          as ConsolidationBreakdownType,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_DomainT.DomainValueText as fincs_breakdowntype_text preserving type ) as ConsolidationBreakdownTypeText,

      @Consumption.hidden: true
      @Analytics.hidden: true
      _DomainT.DomainValue,


      _Language,
      _BreakdownType
};
```
