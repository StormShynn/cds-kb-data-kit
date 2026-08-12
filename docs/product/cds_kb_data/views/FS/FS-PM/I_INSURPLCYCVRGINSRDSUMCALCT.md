---
name: I_INSURPLCYCVRGINSRDSUMCALCT
description: "Calc Meth for Insrd Sum in Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALCT')/$value
semantic_en: "Calc Meth for Insrd Sum in Plcy - Text"
semantic_vi: "Calc Meth for Insrd Sum in Plcy - Text — CDS view cơ bản dựa trên Calc Meth for Insrd Sum in Plcy - Text."
keywords:
  - "calc"
  - "meth"
  - "for"
  - "insrd"
  - "sum"
  - "plcy"
  - "text"
  - "language"
  - "insur"
  - "cvrg"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCVRGINSRDSUMCALCT

**Calc Meth for Insrd Sum in Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyCvrgInsrdSumCalcMeth` | ✓ | |  | `insamtp_cd` | `NUMC(3)` | Type of Sum Insured |
| `InsurPlcyCvrgInsrdSumCalcName` |  | |  | `insamtp_tt` | `CHAR(50)` | Name of Type of Sum Insured |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyCvrgInsrdSumCalc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALCT')/$value)*

```abap
@EndUserText.label: 'Calc Meth for Insrd Sum in Plcy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyCvrgInsrdSumCalcMeth',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY 
                           ]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InsurPlcyCvrgInsrdSumCalcT
  as select from /pm0/abupinsamtt
  association        to parent I_InsurPlcyCvrgInsrdSumCalc as _InsurPlcyCvrgInsrdSumCalc on $projection.InsurPlcyCvrgInsrdSumCalcMeth = _InsurPlcyCvrgInsrdSumCalc.InsurPlcyCvrgInsrdSumCalcMeth
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyCvrgInsrdSumCalc'
      @ObjectModel.text.element: ['InsurPlcyCvrgInsrdSumCalcName']
  key insamtp_cd as InsurPlcyCvrgInsrdSumCalcMeth,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      insamtp_tt as InsurPlcyCvrgInsrdSumCalcName,

      //Associations
      _InsurPlcyCvrgInsrdSumCalc,
      _Language

}
```
