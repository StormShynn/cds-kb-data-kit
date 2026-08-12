---
name: I_OVERALLDELIVRELTDBILLGSTST
description: "Overalldelivreltdbillgstst"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OVERALLDELIVRELTDBILLGSTST

**Overalldelivreltdbillgstst**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallDelivReltdBillgStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OverallDelivReltdBillgStsDesc` |  | |  | `bezei` |  |  |
| `_OverallDelivReltdBillgStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallDelivReltdBillgStatus` | `I_OverallDelivReltdBillgSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'OverallDelivReltdBillgStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Ovrl Delivery Related Billing Sts - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVDLRLTBLSTST'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OverallDelivReltdBillgStsT
  as select from tvbst

  association [0..1] to I_OverallDelivReltdBillgSts as _OverallDelivReltdBillgStatus on $projection.OverallDelivReltdBillgStatus = _OverallDelivReltdBillgStatus.OverallDelivReltdBillgStatus
  association [0..1] to I_Language                  as _Language                     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_OverallDelivReltdBillgStatus'
      @ObjectModel.text.element: ['OverallDelivReltdBillgStsDesc']
  key statu as OverallDelivReltdBillgStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as OverallDelivReltdBillgStsDesc,

      _OverallDelivReltdBillgStatus,
      _Language
}
where
      tvbst.tbnam = 'LIKP'
  and tvbst.fdnam = 'FKSTK'
```
