---
name: C_CHMLCMPLNCMATLASSGMTDEX
description: "Chemical Compliance Info Material"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value
semantic_en: "Chemical Compliance Info Material"
semantic_vi: "Chemical Compliance Info Material — CDS view tiêu dùng dựa trên I_ChmlCmplncMatlAssgmt."
keywords:
  - "chemical"
  - "compliance"
  - "info"
  - "material"
  - "chml"
  - "cmplnc"
  - "matl"
  - "assgmt"
  - "primary"
tags:
  - EHS
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
  - material
---
# C_CHMLCMPLNCMATLASSGMTDEX

**Chemical Compliance Info Material**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncMatlAssgmtUUID` | ✓ | |  |  | `RAW(16)` | Product Assignment |
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `MatlAssgmtIsPrimary` |  | |  |  | `CHAR(1)` | Name Representing the Product |
| `_ChmlCmplncInfo` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChmlCmplncInfo` | `C_ChmlCmplncInfoDEX` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCMATLASSGMTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Chemical Compliance Info Material'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}

@ObjectModel.sapObjectNodeType.name: 'ChmlComplianceInfoMaterial'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'EHFNDD_CCI_MAT',
        role: #MAIN,
        viewElement: ['ChmlCmplncMatlAssgmtUUID'],
        tableElement: ['UUID']
      }         
      ]
    }  
  }
}
define view entity C_ChmlCmplncMatlAssgmtDEX as select from I_ChmlCmplncMatlAssgmt
association [1..1] to C_ChmlCmplncInfoDEX as _ChmlCmplncInfo on $projection.ChmlCmplncInfoUUID = _ChmlCmplncInfo.ChmlCmplncInfoUUID
{
  key ChmlCmplncMatlAssgmtUUID,
  ChmlCmplncInfoUUID,
  Material,
  MatlAssgmtIsPrimary,
    /* Associations */
  _ChmlCmplncInfo,
  _Product
  
 
}
```
