---
name: I_INSURPLCYCVRGINSRDSUMCALC
description: "Calc Meth for Insrd Sum in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALC')/$value
semantic_en: "Calc Meth for Insrd Sum in Insur Plcy"
semantic_vi: "Calc Meth for Insrd Sum in Insur Plcy — CDS view cơ bản dựa trên Calc Meth for Insrd Sum in Insur Plcy."
keywords:
  - "calc"
  - "meth"
  - "for"
  - "insrd"
  - "sum"
  - "insur"
  - "plcy"
  - "cvrg"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCVRGINSRDSUMCALC

**Calc Meth for Insrd Sum in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyCvrgInsrdSumCalcMeth` | ✓ | |  | `/pm0/abupinsamt.insamtp_cd` | `NUMC(3)` | Type of Sum Insured |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGINSRDSUMCALC')/$value)*

```abap
@EndUserText.label: 'Calc Meth for Insrd Sum in Insur Plcy'
@ObjectModel:{
    representativeKey: 'InsurPlcyCvrgInsrdSumCalcMeth',
    sapObjectNodeType.name: 'InsurPlcyCvrgInsrdSumCalcMeth',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPInsrdSumCalc'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurPlcyCvrgInsrdSumCalc
  as select from /pm0/abupinsamt
  composition [0..*] of I_InsurPlcyCvrgInsrdSumCalcT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key /pm0/abupinsamt.insamtp_cd as InsurPlcyCvrgInsrdSumCalcMeth,

      _Text
}
```
