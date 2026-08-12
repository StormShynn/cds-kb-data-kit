---
name: I_AGRMTGUARANTEEAUTHAPPRVL
description: "Agreement Guarantee Authorities Approval"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGUARANTEEAUTHAPPRVL')/$value
semantic_en: "Agreement Guarantee Authorities Approval"
semantic_vi: "Agreement Guarantee Authorities Approval — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "guarantee"
  - "authorities"
  - "approval"
  - "colltrl"
  - "agrmt"
  - "guar"
  - "auth"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTGUARANTEEAUTHAPPRVL

**Agreement Guarantee Authorities Approval**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGUARANTEEAUTHAPPRVL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtGuarAuthApproval` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_appr_auth preserving type )` | `CHAR(2)` | Approval from authorities |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtGuaranteeAuthApprvlText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGUARANTEEAUTHAPPRVL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTGUARANTEEAUTHAPPRVL')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGGURAUTAPR',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ColltrlAgrmtGuarAuthApproval'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Guarantee Authorities Approval'
define view I_AgrmtGuaranteeAuthApprvl
  as select from dd07l
  association [0..*] to I_AgrmtGuaranteeAuthApprvlText as _Text on $projection.ColltrlAgrmtGuarAuthApproval = _Text.ColltrlAgrmtGuarAuthApproval
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_appr_auth preserving type ) as ColltrlAgrmtGuarAuthApproval,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_CAG_APPR_AUTH'
  and dd07l.as4local = 'A'
```
