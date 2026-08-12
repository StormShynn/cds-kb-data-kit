---
name: C_CHMLCMPLNCINFODEX
description: "Chemical Compliance Info"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value
semantic_en: "Chemical Compliance Info"
semantic_vi: "Chemical Compliance Info — CDS view tiêu dùng dựa trên I_ChmlCmplncInfo."
keywords:
  - "chemical"
  - "compliance"
  - "info"
  - "chml"
  - "cmplnc"
  - "internal"
  - "name"
  - "type"
  - "responsible"
  - "unit"
tags:
  - EHS
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
---
# C_CHMLCMPLNCINFODEX

**Chemical Compliance Info**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncInfoUUID` | ✓ | |  |  | `RAW(16)` | Chemical Compliance Information |
| `ChemicalComplianceInfo` |  | |  | `cast(Specification as ehfnd_internal_nr preserving type)` | `CHAR(12)` | Internal Number |
| `ChmlCmplncInternalName` |  | |  |  | `CHAR(132)` | Internal Name |
| `ChmlCmplncInfoType` |  | |  |  | `CHAR(2)` | CCI Type |
| `ResponsibleUnit` |  | |  | `ProdStewardshipRespUnit` | `CHAR(10)` | Responsible Unit |
| `DngrsGdsRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit for Dangerous Goods |
| `ProdStewardshipRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit |
| `MaterialIsSold` |  | |  |  | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | |  |  | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | |  |  | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | |  |  | `CHAR(1)` | Product is Produced |
| `ChmlCmplncProdIsResearched` |  | |  |  | `CHAR(1)` | Research and Development Sample |
| `SftyDataShtIsNotRequired` |  | |  | `MatlIsNotProdSafetyRlvt` | `CHAR(1)` | Product is not relevant for product safety |
| `MaterialIsDisposed` |  | |  |  | `CHAR(1)` | Product is Disposed |
| `MaterialIsEmissionRelevant` |  | |  |  | `CHAR(1)` | Product is Emission Relevant |
| `_MaterialAssignment` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Chemical Compliance Info'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}

@ObjectModel.sapObjectNodeType.name: 'ChemicalComplianceInfo'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataExtraction: { 
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'EHFNDD_CCI',
        role: #MAIN,
        viewElement: ['ChmlCmplncInfoUUID'],
        tableElement: ['UUID']
      }         
      ]
    }  
  }
}
define view entity C_ChmlCmplncInfoDEX as select from I_ChmlCmplncInfo
{
  key ChmlCmplncInfoUUID,
      // Internal Number
      cast(Specification as ehfnd_internal_nr preserving type) as ChemicalComplianceInfo,
      ChmlCmplncInternalName,
      ChmlCmplncInfoType,
      
      ProdStewardshipRespUnit    as ResponsibleUnit,
      DngrsGdsRespUnit           as DngrsGdsRespUnit,

      ProdStewardshipRespUnit    as ProdStewardshipRespUnit,

      MaterialIsSold,
      MaterialIsTransported,
      MaterialIsSourced,
      MaterialIsProduced,
      ChmlCmplncProdIsResearched,
      @EndUserText.label: 'Is Not Product Safety-Relevant'
      MatlIsNotProdSafetyRlvt                                                              as SftyDataShtIsNotRequired,
      MaterialIsDisposed, 
      @EndUserText.label: 'Emission-Relevant'
      MaterialIsEmissionRelevant ,
  
      _MaterialAssignment 
}
```
