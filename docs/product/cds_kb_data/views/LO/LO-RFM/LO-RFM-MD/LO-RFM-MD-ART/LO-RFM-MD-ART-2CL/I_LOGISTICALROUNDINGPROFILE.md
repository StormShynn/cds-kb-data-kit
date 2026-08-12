---
name: I_LOGISTICALROUNDINGPROFILE
description: "Logistical Rounding Profile"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILE')/$value
semantic_en: "Logistical Rounding Profile"
semantic_vi: "Logistical Rounding Profile — CDS view giao diện dựa trên Logistical Rounding Profile."
keywords:
  - "logistical"
  - "rounding"
  - "profile"
  - "plant"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_LOGISTICALROUNDINGPROFILE

**Logistical Rounding Profile**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `LogisticalRoundingProfile` | ✓ | |  | `cast (rdprf as logisticalroundingprofile preserving type)` | `CHAR(4)` | Logistical Rounding Profile |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOGISTICALROUNDINGPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ILROUNDPROFILE'
@EndUserText.label: 'Logistical Rounding Profile'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel: {
    supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER],
    compositionRoot: true,
    sapObjectNodeType.name: 'LogisticalRoundingProfile',
    representativeKey: 'LogisticalRoundingProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view I_LogisticalRoundingProfile
  as select distinct from rdpr
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant 
  composition [0..*] of I_LogisticalRoundingProfileT as _Text 
{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
      @ObjectModel.text.association: '_Text'
  key cast (rdprf as logisticalroundingprofile preserving type) as LogisticalRoundingProfile,
      _Plant,
      _Text

}
```
