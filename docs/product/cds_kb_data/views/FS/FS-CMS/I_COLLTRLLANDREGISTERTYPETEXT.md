---
name: I_COLLTRLLANDREGISTERTYPETEXT
description: "Land Reg Type for Collateral - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLLANDREGISTERTYPETEXT')/$value
semantic_en: "Land Reg Type for Collateral - Text"
semantic_vi: "Land Reg Type for Collateral - Text — CDS view giao diện dựa trên tcms_lr_de_tya_t."
keywords:
  - "land"
  - "reg"
  - "type"
  - "for"
  - "collateral"
  - "text"
  - "register"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLLANDREGISTERTYPETEXT

**Land Reg Type for Collateral - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLLANDREGISTERTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralLandRegisterType` | ✓ | |  | `reg_typ` | `CHAR(6)` | Register Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `CollateralLandRegisterTypeText` |  | |  | `name` | `CHAR(40)` | Name in a specified language |
| `_Language` | | ✓ | | | | |
| `_CollateralLandRegisterType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralLandRegisterType` | `I_CollateralLandRegisterType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLLANDREGISTERTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLLANDREGISTERTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICLRTYPETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                         
    representativeKey: 'CollateralLandRegisterType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Land Reg Type for Collateral - Text'
define view I_ColltrlLandRegisterTypeText
  as select from tcms_lr_de_tya_t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_CollateralLandRegisterType as _CollateralLandRegisterType on $projection.CollateralLandRegisterType = _CollateralLandRegisterType.CollateralLandRegisterType
{
      @ObjectModel.foreignKey.association: '_CollateralLandRegisterType'
  key reg_typ  as CollateralLandRegisterType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralLandRegisterTypeText,

      _Language,
      _CollateralLandRegisterType

}
```
