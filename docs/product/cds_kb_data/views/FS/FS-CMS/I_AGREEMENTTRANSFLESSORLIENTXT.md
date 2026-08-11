---
name: I_AGREEMENTTRANSFLESSORLIENTXT
description: "Agreement Transfer Lessor Lien - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFLESSORLIENTXT')/$value
semantic_en: "Agreement Transfer Lessor Lien - Text"
semantic_vi: "Agreement Transfer Lessor Lien - Text — CDS view giao diện dựa trên tcms_cag_lsrln_t."
keywords:
  - "agreement"
  - "transfer"
  - "lessor"
  - "lien"
  - "text"
  - "colltrl"
  - "agrmt"
  - "transf"
  - "language"
tags:
  - FS
  - bo:salesorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTRANSFLESSORLIENTXT

**Agreement Transfer Lessor Lien - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFLESSORLIENTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtTransfLessorLien` | ✓ | |  | `ind_lessor_lien` | `CHAR(2)` | Indicator for Lessor Lien on Collateral Agreement |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgrmtTransfLessorLienTxt` |  | |  | `name` | `CHAR(40)` | CAG Lessor Lien Name |
| `_Language` | | ✓ | | | | |
| `_ColltrlAgrmtTransfLessorLien` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlAgrmtTransfLessorLien` | `I_AgreementTransferLessorLien` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFLESSORLIENTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTRANSFLESSORLIENTXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGTLSRLIENTXT',
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
    representativeKey: 'ColltrlAgrmtTransfLessorLien'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Transfer Lessor Lien - Text'
define view I_AgreementTransfLessorLienTxt
  as select from tcms_cag_lsrln_t
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_AgreementTransferLessorLien as _ColltrlAgrmtTransfLessorLien on $projection.ColltrlAgrmtTransfLessorLien = _ColltrlAgrmtTransfLessorLien.ColltrlAgrmtTransfLessorLien
{
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtTransfLessorLien'
  key ind_lessor_lien as ColltrlAgrmtTransfLessorLien,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language        as Language,
      @Semantics.text: true
      name            as AgrmtTransfLessorLienTxt,

      _Language,
      _ColltrlAgrmtTransfLessorLien
}
```
