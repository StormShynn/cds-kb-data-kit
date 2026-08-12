---
name: C_RDPBATCHCLASSIFICATIONDEX
description: "This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Batch Data with Classification Extractor for RDP — CDS view tiêu dùng dựa trên I_Batch."
keywords:
  - "batch"
  - "data"
  - "with"
  - "classification"
  - "extractor"
  - "for"
  - "rdp"
  - "material"
  - "plant"
  - "class"
  - "characteristic"
tags:
  - SUS
  - bo:companycode
  - component:SUS-RDP-INT
  - consumption-view
  - product
  - SUS-RDP
  - SUS-RDP-INT
---
# C_RDPBATCHCLASSIFICATIONDEX

**This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Batch` | ✓ | | `_Batch` | `Batch` | `CHAR(10)` | Batch Number |
| `Material` | ✓ | | `_Batch` | `Material` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | | `_Batch` | `Plant` | `CHAR(4)` | Plant |
| `BatchClass` | ✓ | | `_ClfnClass` | `Class` | `CHAR(18)` | Class number |
| `BatchCharacteristic` | ✓ | | `_ClfnCharcBasic` | `Characteristic` | `CHAR(30)` | Characteristic Name |
| `BatchCharacteristicValue` |  | | `_ClfnObjectCharcValueBasic` | `CharcValue` | `CHAR(70)` | Characteristic Value |
| `ManufactureDate` |  | | `_Batch` | `ManufactureDate` | `DATS(8)` | Date of Manufacture |
| `LastChangeDateTime` |  | | `_Batch` | `LastChangeDateTime` | `DEC(21)` | Last Change Timestamp |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClfnCharcBasic` | `I_ClfnCharcBasic` | [0..1] |
| `_ClfnClass` | `I_ClfnClass` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
    sqlViewName: 'CRDPBTCHCLASDEX',
    compiler.compareFilter: true
}

@ObjectModel: {
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  sapObjectNodeType.name: 'Batch',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  modelingPattern: #NONE
 }

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}

@EndUserText.label: 'Batch Data with Classification Extractor for RDP'

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
      enabled: true,
      delta: {
        byElement.name :  'LastChangeDateTime',
        byElement.detectDeletedRecords: true
      }
  },
  internalName:#LOCAL
}

define view C_RDPBatchClassificationDEX

  as select from            I_Batch                     as _Batch

    left outer to many join I_ClfnObjectCharcValueBasic as _ClfnObjectCharcValueBasic on _ClfnObjectCharcValueBasic.ClfnObjectID = _Batch.ClfnObjectInternalID
    left outer to many join I_ClfnObjectClassBasic      as _ClfnObjectClassBasic      on  _ClfnObjectClassBasic.ClfnObjectID       = _Batch.ClfnObjectInternalID
                                                                                      and _ClfnObjectClassBasic.TimeIntervalNumber = _ClfnObjectCharcValueBasic.TimeIntervalNumber

  association to I_ClfnCharcBasic as _ClfnCharcBasic on  _ClfnCharcBasic.CharcInternalID    = _ClfnObjectCharcValueBasic.CharcInternalID
                                                     and _ClfnCharcBasic.TimeIntervalNumber = _ClfnObjectCharcValueBasic.TimeIntervalNumber
  association to I_ClfnClass      as _ClfnClass      on  _ClfnClass.ClassInternalID = _ClfnObjectClassBasic.ClassInternalID
{
  key _Batch.Batch,
  key _Batch.Material,
  key _Batch.Plant,
  key _ClfnClass.Class                      as BatchClass,
  key _ClfnCharcBasic.Characteristic        as BatchCharacteristic,
      _ClfnObjectCharcValueBasic.CharcValue as BatchCharacteristicValue,
      _Batch.ManufactureDate,
      
      //field for delta extraction
      @Semantics.systemDateTime.lastChangedAt: true
      _Batch.LastChangeDateTime
}
```
