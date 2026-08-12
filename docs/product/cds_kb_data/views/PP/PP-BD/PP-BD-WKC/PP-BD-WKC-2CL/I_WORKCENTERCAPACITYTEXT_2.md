---
name: I_WORKCENTERCAPACITYTEXT_2
description: "Work Center Capacity - Text"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value
semantic_en: "Work Center Capacity - Text"
semantic_vi: "Work Center Capacity - Text — CDS view giao diện dựa trên I_CapacityText."
keywords:
  - "work"
  - "center"
  - "capacity"
  - "text"
  - "internal"
  - "type"
  - "code"
  - "category"
  - "allocation"
  - "language"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
---
# I_WORKCENTERCAPACITYTEXT_2

**Work Center Capacity - Text**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  | `objid` | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` | ✓ | |  | `objty` | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` | ✓ | |  | `cast(CapMap.canum as pph_cr_capnum preserving type)` | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` | ✓ | |  |  | `NUMC(8)` | Capacity ID |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `CapacityText` |  | |  |  | `CHAR(40)` | Capacity Short Text |
| `CapacityLastChangeDateTime` |  | |  | `case when Capacity.CapacityLastChangeDateTime is null then cast('20190101120000' as kap_lastchange_datetime) else Capacity.CapacityLastChangeDateTime end` | `DEC(21)` | Capacity Last Change Date Time |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterTypeCode` | | ✓ | | | | |
| `_WorkCenterCapMap` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenter` | `I_WorkCenter` | [1..1] |
| `_WorkCenterTypeCode` | `I_WorkCenterType` | [1..1] |
| `_WorkCenterCapMap` | `I_WorkCenterCapacity` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERCAPACITYTEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Work Center Capacity - Text'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.dataCategory:  #TEXT
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'WorkCenterCapacityText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view entity I_WorkCenterCapacityText_2
  as select from I_CapacityText as CapText
   inner join   I_Capacity     as Capacity on Capacity.CapacityInternalID = CapText.CapacityInternalID
    inner join   crca          as CapMap   on Capacity.CapacityInternalID = CapMap.kapid
  
  association [1..1] to I_WorkCenter         as _WorkCenter         on  $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
                                                                    and $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
  association [1..1] to I_WorkCenterType     as _WorkCenterTypeCode on  $projection.WorkCenterTypeCode = _WorkCenterTypeCode.WorkCenterTypeCode

  association [1..1] to I_WorkCenterCapacity as _WorkCenterCapMap   on  $projection.WorkCenterInternalID       = _WorkCenterCapMap.WorkCenterInternalID
                                                                    and $projection.WorkCenterTypeCode         = _WorkCenterCapMap.WorkCenterTypeCode
                                                                    and $projection.CapacityCategoryAllocation = _WorkCenterCapMap.CapacityCategoryAllocation
{
      @ObjectModel.foreignKey.association: '_WorkCenter'
  key CapMap.objid                                        as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterTypeCode'
  key CapMap.objty                                        as WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_WorkCenterCapMap'
  key cast(CapMap.canum as pph_cr_capnum preserving type) as CapacityCategoryAllocation,
  key CapText.CapacityInternalID                          as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_Language'
  key CapText.Language,

      @Semantics.text: true
      CapText.CapacityText,

      case when Capacity.CapacityLastChangeDateTime is null then
        cast('20190101120000' as kap_lastchange_datetime)
        else Capacity.CapacityLastChangeDateTime end      as CapacityLastChangeDateTime,

      //Associations
      _WorkCenter,
      _WorkCenterTypeCode,
      _WorkCenterCapMap,
      CapText._Language

}
where
      Capacity.CapacityIsPooled is initial
  and Capacity.Capacity         is initial
```
