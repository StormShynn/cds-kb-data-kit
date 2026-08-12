---
name: C_EHSAMOUNTDEX
description: "EHS Data Amount"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value
semantic_en: "EHS Data Amount"
semantic_vi: "EHS Data Amount — CDS view tiêu dùng dựa trên I_EHSAmountRoot."
keywords:
  - "ehs"
  - "data"
  - "amount"
  - "date"
  - "time"
  - "value"
  - "unit"
  - "measure"
  - "warning"
tags:
  - EHS
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
---
# C_EHSAMOUNTDEX

**EHS Data Amount**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountValue` |  | |  | `cast( EHSAmount.EHSAmountValue as ehfnd_amns_value_nc preserving type )` | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  | `cast ( EHSAmount.UnitOfMeasure as ehfnd_unit_code_cunit preserving type )` | `UNIT(3)` | Unit of measure |
| `EHSAmountHasWarning` |  | |  |  | `CHAR(1)` | Warning |
| `EHSAmountIsFaulty` |  | |  |  | `CHAR(1)` | Faulty Value |
| `EHSAmountSourceType` |  | |  | `cast (EHSAmount.EHSAmountSourceType as ehfnd_amns_src_type_nc preserving type )` | `CHAR(2)` | Data Source Type |
| `EHSAmountSourceUUID` |  | |  |  | `RAW(16)` | Reference to Source Type BO Root Node ID |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSLocationUUID` |  | | `_EHSAmountsForActivity` | `EHSLocationUUID` | `RAW(16)` | Location |
| `_EHSDataCollection` | | ✓ | | | | |
| `_EHSCalcDefResultHeader` | | ✓ | | | | |
| `_EHSSamplingHeader` | | ✓ | | | | |
| `_EHSLocationAggregation` | | ✓ | | | | |
| `_EHSChmlPhysProperty` | | ✓ | | | | |
| `_ListedSubstanceElement` | | ✓ | | | | |
| `_ChmlCmplncPrimMatl` | | ✓ | | | | |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSDataCollection` | `C_EHSDataCollectionDEX` | [0..1] |
| `_EHSCalcDefResultHeader` | `C_EHSCalcDefResultHeaderDEX` | [0..1] |
| `_EHSSamplingHeader` | `C_EHSSamplingHeaderDEX` | [0..1] |
| `_EHSLocationAggregation` | `C_EHSLocationAggregationDEX` | [0..1] |
| `_EHSChmlPhysProperty` | `C_EHSChmlPhysPropertyDEX` | [0..1] |
| `_ListedSubstanceElement` | `C_ListedSubstanceElementDEX` | [0..*] |
| `_ChmlCmplncPrimMatl` | `C_ChmlCmplncPrimMatlDEX` | [0..1] |
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Data Amount'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel: {
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'EHSDataAmount'
}
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_amns_root',
        role: #MAIN,
        viewElement: ['EHSAmountUUID'],
        tableElement: ['db_key']
      }
      ]
    }
  }
}

define view entity C_EHSAmountDEX
  as select from           I_EHSAmountRoot         as EHSAmount
  // Needed for DCL
    left outer to one join I_EHSAmountsForActivity as _EHSAmountsForActivity on _EHSAmountsForActivity.EHSAmountUUID = EHSAmount.EHSAmountUUID

  // Activities
  association [0..1] to C_EHSDataCollectionDEX      as _EHSDataCollection        on  EHSAmount.EHSAmountSourceUUID = _EHSDataCollection.DataCollectionUUID
                                                                                 and EHSAmount.EHSAmountSourceType = '02'
  association [0..1] to C_EHSCalcDefResultHeaderDEX as _EHSCalcDefResultHeader   on  EHSAmount.EHSAmountSourceUUID = _EHSCalcDefResultHeader.CalculationResultHeaderUUID
                                                                                 and EHSAmount.EHSAmountSourceType = '04'
  association [0..1] to C_EHSSamplingHeaderDEX      as _EHSSamplingHeader        on  EHSAmount.EHSAmountSourceUUID = _EHSSamplingHeader.SamplingHeaderUUID
                                                                                 and EHSAmount.EHSAmountSourceType = '05'
  association [0..1] to C_EHSLocationAggregationDEX as _EHSLocationAggregation   on  EHSAmount.EHSAmountSourceUUID = _EHSLocationAggregation.LocAggregationUUID
                                                                                 and EHSAmount.EHSAmountSourceType = '06'

  // Subjects
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [0..1] to C_EHSChmlPhysPropertyDEX    as _EHSChmlPhysProperty      on  EHSAmount.EHSSubjectUUID = _EHSChmlPhysProperty.EHSChemicalPhysicalPropUUID
                                                                                 and EHSAmount.EHSSubjectType = '02'
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [0..*] to C_ListedSubstanceElementDEX as _ListedSubstanceElement   on  EHSAmount.EHSSubjectUUID = _ListedSubstanceElement.ListedSubstanceUUID
                                                                                 and EHSAmount.EHSSubjectType = '03'

  association [0..1] to C_ChmlCmplncPrimMatlDEX     as _ChmlCmplncPrimMatl       on  EHSAmount.EHSSubjectUUID = _ChmlCmplncPrimMatl.ChmlCmplncInfoUUID
                                                                                 and EHSAmount.EHSSubjectType = '06'
  // association [0..1] to C_SubstanceDEX as _Substance on EHSAmount.EHSSubjectUUID = _Substance.SubstanceUUID and EHSAmount.EHSSubjectType = '07'

  // Needed for DCL
  association [0..1] to I_EHSLocationRevisionBasic  as _EHSLocationRevisionBasic on  _EHSLocationRevisionBasic.EHSLocationUUID = _EHSAmountsForActivity.EHSLocationUUID

{
      @EndUserText.label: 'Amount Key'
  key EHSAmount.EHSAmountUUID,
      EHSAmount.EHSAmountUTCDateTime,
      cast( EHSAmount.EHSAmountValue as ehfnd_amns_value_nc preserving type ) as EHSAmountValue,
      cast ( EHSAmount.UnitOfMeasure as ehfnd_unit_code_cunit preserving type ) as UnitOfMeasure,
      EHSAmount._UnitText,
      @Semantics.booleanIndicator
      EHSAmount.EHSAmountHasWarning,
      @Semantics.booleanIndicator
      EHSAmount.EHSAmountIsFaulty,
      @EndUserText.label: 'Data Source Type'
     cast (EHSAmount.EHSAmountSourceType as ehfnd_amns_src_type_nc preserving type ) as EHSAmountSourceType,
      EHSAmount._EHSAmountSourceType,
      EHSAmount.EHSAmountSourceUUID,
      EHSAmount.EHSAmountExternalSource,
      EHSAmount.EHSSubjectType,
      @EndUserText.label: 'Subject Key'
      EHSAmount.EHSSubjectUUID,

      // Actvities
      _EHSDataCollection,
      _EHSCalcDefResultHeader,
      _EHSSamplingHeader,
      _EHSLocationAggregation,

      // Subjects
      _EHSChmlPhysProperty,
      _ListedSubstanceElement,
      _ChmlCmplncPrimMatl,
      // _Substance,


      // Needed for DCL
      @EndUserText.label: 'Location Key'      
      _EHSAmountsForActivity.EHSLocationUUID,
      _EHSLocationRevisionBasic
}
where
      EHSAmount.EHSAmountStatus         = '02'
  and EHSAmount.EHSAmountIsPreliminary  = ''
  and EHSAmount.EHSAmountIsMissing      = ''
  and EHSAmount.EHSAmountIsNotAvailable = ''
```
