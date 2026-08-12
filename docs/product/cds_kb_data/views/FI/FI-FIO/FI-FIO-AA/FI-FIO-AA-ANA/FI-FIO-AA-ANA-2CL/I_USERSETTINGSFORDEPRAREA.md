---
name: I_USERSETTINGSFORDEPRAREA
description: "This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity."
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
