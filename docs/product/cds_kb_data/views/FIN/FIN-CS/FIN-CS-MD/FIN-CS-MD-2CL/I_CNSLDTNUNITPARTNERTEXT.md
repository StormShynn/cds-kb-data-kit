---
name: I_CNSLDTNUNITPARTNERTEXT
description: "Cnsldtnunitpartnertext"
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
  - text-view
  - text
  - partner
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPARTNERTEXT

**Cnsldtnunitpartnertext**

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
| `Language` | ✓ | | `_UnitAttributeValueT` | `Language` |  |  |
| `ConsolidationUnitPartner` | ✓ | |  | `cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitpartner preserving type )` |  |  |
| `ConsolidationUnitPartnerText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValText` |  |  |
| `CnsldtnUnitPartnerLongText` |  | | `_UnitAttributeValueT` | `CnsldtnUnitAttribValLongText` |  |  |
| `_CnsldtnUnitPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnUnitPartner` | `I_CnsldtnUnitPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUPARTNERT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'ConsolidationUnitPartner',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cons Unit Partner Selection - Text'

define view I_CnsldtnUnitPartnerText
  as select from P_CnsldtnUnitAttributeValueT(P_CnsldtnUnitAttribute : 'S-PARTNER') as _UnitAttributeValueT

  association [1..1] to I_CnsldtnUnitPartner as _CnsldtnUnitPartner on $projection.ConsolidationUnitPartner = _CnsldtnUnitPartner.ConsolidationUnitPartner
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _UnitAttributeValueT.Language,

  key cast( _UnitAttributeValueT.CnsldtnUnitAttributeValue as fincs_unitpartner preserving type ) as ConsolidationUnitPartner,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _UnitAttributeValueT.CnsldtnUnitAttribValText                                               as ConsolidationUnitPartnerText,

      @Semantics.text
      _UnitAttributeValueT.CnsldtnUnitAttribValLongText                                           as CnsldtnUnitPartnerLongText,


      _UnitAttributeValueT._Language,
      _CnsldtnUnitPartner
}
```
