---
name: I_COLLATERALPARTNERFUNCTIONTXT
description: "Collateral Business Partner Func - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTIONTXT')/$value
semantic_en: "Collateral Business Partner Func - Text"
semantic_vi: "Collateral Business Partner Func - Text — CDS view giao diện dựa trên tcms_bpf_t."
keywords:
  - "collateral"
  - "business"
  - "partner"
  - "func"
  - "text"
  - "function"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_COLLATERALPARTNERFUNCTIONTXT

**Collateral Business Partner Func - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTIONTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralPartnerFunction` | ✓ | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralPartnerFunctionTxt` |  | |  | `name` | `CHAR(40)` | Business Partner Function Name |
| `_Language` | | ✓ | | | | |
| `_CollateralPartnerFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralPartnerFunction` | `I_CollateralPartnerFunction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTIONTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPARTNERFUNCTIONTXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLBPFUNCTXT',
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
    representativeKey: 'CollateralPartnerFunction'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Business Partner Func - Text'
define view I_CollateralPartnerFunctionTxt
  as select from tcms_bpf_t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_CollateralPartnerFunction as _CollateralPartnerFunction on $projection.CollateralPartnerFunction = _CollateralPartnerFunction.CollateralPartnerFunction
{
      @ObjectModel.foreignKey.association: '_CollateralPartnerFunction'
  key bpf      as CollateralPartnerFunction,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralPartnerFunctionTxt,

      _Language,
      _CollateralPartnerFunction

}
```
