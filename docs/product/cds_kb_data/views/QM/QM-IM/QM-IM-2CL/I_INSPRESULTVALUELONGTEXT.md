---
name: I_INSPRESULTVALUELONGTEXT
description: "This CDS view provides access to the inspection result data for an inspection characteristic (single values)"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value
semantic_en: "This CDS view provides access to the inspection result data for an inspection characteristic (single values)"
semantic_vi: "Long Text of Inspection Result Value — CDS view giao diện (transactional data) dựa trên qaseltext."
keywords:
  - "long"
  - "text"
  - "inspection"
  - "result"
  - "value"
  - "insp"
  - "plan"
  - "operation"
  - "internal"
  - "characteristic"
  - "number"
tags:
  - QM
  - component:QM-IM-2CL
  - interface-view
  - lob:quality management
  - QM-IM
  - QM-IM-2CL
---
# I_INSPRESULTVALUELONGTEXT

**This CDS view provides access to the inspection result data for an inspection characteristic (single values)**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` | `NUMC(12)` | Inspection Lot Number |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` | `NUMC(8)` | Current Node Number from Order Counter |
| `InspectionCharacteristic` | ✓ | |  | `merknr` | `NUMC(4)` | Inspection Characteristic Number |
| `InspResultValueInternalID` | ✓ | |  | `detailerg` | `NUMC(8)` | Number of Individual Result |
| `LongTextInternalNumber` | ✓ | |  | `counter` | `INT2(5)` | Long Text Counter |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InspectionResultLongText` |  | |  | `content` |  |  |
| `LongTextCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  | `created_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  | `changed_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_InspectionOperation` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_InspectionResultValue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionOperation` | `I_InspectionOperation` | [1..1] |
| `_InspectionLot` | `I_InspectionLot` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Long Text of Inspection Result Value'
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'InspResultValueInternalID',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]    
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspResultValueLongText
  as select from qaseltext
  association        to one I_InspectionResultValue as _InspectionResultValue on  $projection.InspectionLot               = _InspectionResultValue.InspectionLot
                                                                              and $projection.InspPlanOperationInternalID = _InspectionResultValue.InspPlanOperationInternalID
                                                                              and $projection.InspectionCharacteristic    = _InspectionResultValue.InspectionCharacteristic
                                                                              and $projection.InspResultValueInternalID   = _InspectionResultValue.InspResultValueInternalID
  association [1..1] to I_InspectionOperation       as _InspectionOperation       on  $projection.InspectionLot               = _InspectionOperation.InspectionLot
                                                                                  and $projection.InspPlanOperationInternalID = _InspectionOperation.InspPlanOperationInternalID
  association [1..1] to I_InspectionLot             as _InspectionLot         on  $projection.InspectionLot = _InspectionLot.InspectionLot
  association [1..1] to I_Language                  as _Language              on  $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_InspectionLot'
  key qaseltext.prueflos  as InspectionLot,
  key qaseltext.vorglfnr  as InspPlanOperationInternalID,
  key qaseltext.merknr    as InspectionCharacteristic,
  key qaseltext.detailerg as InspResultValueInternalID,
  key counter             as LongTextInternalNumber,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key qaseltext.langu     as Language,
      qaseltext.content   as InspectionResultLongText,
      created_by          as LongTextCreatedByUser,
      created_at          as LongTextCreatedAt,
      changed_by          as LongTextLastChangedByUser,
      changed_at          as LongTextLastChangedAt,

      //Association
      _InspectionResultValue,
      _InspectionOperation,
      _InspectionLot,
      _Language
}
```
