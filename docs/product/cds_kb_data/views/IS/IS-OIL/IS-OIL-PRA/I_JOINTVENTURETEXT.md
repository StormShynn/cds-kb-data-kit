---
name: I_JOINTVENTURETEXT
description: "Joint Venture Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURETEXT')/$value
semantic_en: "Joint Venture Name - Text"
semantic_vi: "Joint Venture Name - Text — CDS view giao diện dựa trên t8jvt."
keywords:
  - "joint"
  - "venture"
  - "name"
  - "text"
  - "company"
  - "code"
  - "language"
  - "class"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_JOINTVENTURETEXT

**Joint Venture Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JointVentureName` |  | |  | `cast ( vtext as oiu_vdm_jntventurename )` | `CHAR(35)` | Joint Venture Name |
| `JointVentureClass` |  | | `_JointVenture` | `JointVentureClass` | `CHAR(2)` | Venture Class |
| `JointVentureType` |  | | `_JointVenture` | `JointVentureType` | `CHAR(1)` | Venture Type |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVenture` | `I_JointVenture` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURETEXT')/$value)*

```abap
@EndUserText.label: 'Joint Venture Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVJNTVENTURETXT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JointVenture'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]

define view I_JointVentureText
  as select from t8jvt
  association [0..1] to I_CompanyCode  as _CompanyCode  on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_JointVenture as _JointVenture on $projection.CompanyCode = _JointVenture.CompanyCode
                                                       and $projection.JointVenture = _JointVenture.JointVenture
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast( bukrs as fis_bukrs preserving type )  as CompanyCode,
  key vname                                     as JointVenture,
      @Semantics.language
  key spras                                     as Language,
      @Semantics.text
      cast ( vtext as oiu_vdm_jntventurename )  as JointVentureName,
      _JointVenture.JointVentureClass           as JointVentureClass, // required for DCL
      _JointVenture.JointVentureType            as JointVentureType,  // required for DCL
// will also need JOA class for DCL when available from core team on I_JointVenture
//      _JointVenture,
      _CompanyCode
};
```
