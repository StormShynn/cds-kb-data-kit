---
name: I_USERSETTINGSFORDEPRAREA
description: "This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity."
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity."
semantic_vi: "Depreciation Area User Default Value — CDS view giao diện dựa trên I_User."
keywords:
  - "depreciation"
  - "area"
  - "user"
  - "default"
  - "value"
  - "business"
  - "asset"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_USERSETTINGSFORDEPRAREA

**This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessUser` | ✓ | |  | `UserID` | `CHAR(12)` | User ID |
| `AssetDepreciationArea` |  | |  | `cast(usr05.parva as fis_afabe_d)` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIUSRSTTNGDA', preserveKey: true, compiler.compareFilter: true}
@Analytics: {dataCategory: #DIMENSION, internalName:#LOCAL}
@EndUserText.label: 'Depreciation Area User Default Value'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'BusinessUser',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view I_UserSettingsForDeprArea
  as select from I_User

    inner join   usr05 as usr05 on  I_User.UserID = usr05.bname
                                and usr05.parid   = 'AFB'
{
  key UserID as BusinessUser,
      cast(usr05.parva as fis_afabe_d) as AssetDepreciationArea
}
where
  UserID = $session.user and
  usr05.parva   <> ''
```
