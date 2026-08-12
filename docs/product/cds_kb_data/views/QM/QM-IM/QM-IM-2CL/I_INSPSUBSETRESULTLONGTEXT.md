---
name: I_INSPSUBSETRESULTLONGTEXT
description: "This CDS view provides access to the inspection result of an inspection point."
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value
semantic_en: "This CDS view provides access to the inspection result of an inspection point."
semantic_vi: "Long Text of Insp Point Result — CDS view giao diện (transactional data) dựa trên qasrltext."
keywords:
  - "long"
  - "text"
  - "insp"
  - "point"
  - "result"
  - "inspection"
  - "plan"
  - "operation"
  - "internal"
  - "characteristic"
  - "subset"
  - "item"
  - "counter"
tags:
  - QM
  - bo:project
  - component:QM-IM-2CL
  - interface-view
  - lob:quality management
  - QM-IM
  - QM-IM-2CL
---
# I_INSPSUBSETRESULTLONGTEXT

**This CDS view provides access to the inspection result of an inspection point.**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  | `prueflos` | `NUMC(12)` | Inspection Lot Number |
| `InspPlanOperationInternalID` | ✓ | |  | `vorglfnr` | `NUMC(8)` | Current Node Number from Order Counter |
| `InspectionCharacteristic` | ✓ | |  | `merknr` | `NUMC(4)` | Inspection Characteristic Number |
| `InspectionSubsetInternalID` | ✓ | |  | `probenr` | `NUMC(6)` | Number of Partial Sample |
| `ItemCounter` | ✓ | |  | `counter` | `INT2(5)` | Long Text Counter |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `LongTextID` |  | |  | `textid` | `CHAR(4)` | Text ID |
| `InspSubsetResultLongText` |  | |  | `content` |  |  |
| `LongTextCreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  | `created_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  | `changed_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_InspectionLot` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Long Text of Insp Point Result'
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'InspectionLot',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]    
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.technicalName: 'IINSPSBSTRESLT'
define view entity I_InspSubsetResultLongText as select from qasrltext 
    association [1] to I_InspectionLot as _InspectionLot
      on $projection.InspectionLot = _InspectionLot.InspectionLot
    association [1..1] to I_Language as _Language
      on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_InspectionLot'
    key prueflos as InspectionLot,
    key vorglfnr as InspPlanOperationInternalID,
    key merknr   as InspectionCharacteristic,
    key probenr  as InspectionSubsetInternalID,
    key counter  as ItemCounter,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key langu as Language,
    textid as LongTextID,

    content     as InspSubsetResultLongText,
    created_by  as LongTextCreatedByUser,
    created_at  as LongTextCreatedAt,
    changed_by  as LongTextLastChangedByUser,
    changed_at  as LongTextLastChangedAt,

    /* Association */
    _InspectionLot,
    _Language    
}
```
