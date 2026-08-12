---
name: I_AGREEMENTTRANSFERLESSORLIEN
description: "Agreement Transfer Lessor Lien"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFERLESSORLIEN')/$value
semantic_en: "Agreement Transfer Lessor Lien"
semantic_vi: "Agreement Transfer Lessor Lien — CDS view giao diện dựa trên tcms_cag_lsrln."
keywords:
  - "agreement"
  - "transfer"
  - "lessor"
  - "lien"
  - "colltrl"
  - "agrmt"
  - "transf"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTRANSFERLESSORLIEN

**Agreement Transfer Lessor Lien**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFERLESSORLIEN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtTransfLessorLien` | ✓ | |  | `ind_lessor_lien` | `CHAR(2)` | Indicator for Lessor Lien on Collateral Agreement |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementTransfLessorLienTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFERLESSORLIEN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFERLESSORLIEN')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGTLSRLIEN',
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
    representativeKey: 'ColltrlAgrmtTransfLessorLien'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Transfer Lessor Lien'
define view I_AgreementTransferLessorLien
  as select from tcms_cag_lsrln
  association [0..*] to I_AgreementTransfLessorLienTxt as _Text on $projection.ColltrlAgrmtTransfLessorLien = _Text.ColltrlAgrmtTransfLessorLien
{
      @ObjectModel.text.association: '_Text'
  key ind_lessor_lien as ColltrlAgrmtTransfLessorLien,

      _Text
}
```
