---
name: I_FTR_FAC_TRANS_CAT_VH
description: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of the transaction category of a facility. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH')/$value
semantic_en: "This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of the transaction category of a facility. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Facility Transaction Category — CDS view giao diện dựa trên at01."
keywords:
  - "facility"
  - "transaction"
  - "category"
  - "instr"
  - "financial"
  - "product"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FTR_FAC_TRANS_CAT_VH

**This CDS view is used in the app Credit Line Analysis - Review Booklet for the value help of the transaction category of a facility. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinInstrTransactionCategory` | ✓ | |  | `sfgtyp` | `NUMC(3)` | Transaction Category |
| `FinancialInstrProductCategory` | ✓ | |  | `sanlfor` | `NUMC(3)` | Financial Product Category |
| `_Text` | | ✓ | | | | |
| `_FinancialInstrProductCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Ftr_Fac_Trans_Cat_Vh_T` | [0..*] |
| `_FinancialInstrProductCategory` | `I_FinancialInstrProdCat` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FTR_FAC_TRANS_CAT_VH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFACTRANSCATVH'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION}
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.representativeKey: 'FinInstrTransactionCategory'
@ObjectModel.semanticKey:  [ 'FinInstrTransactionCategory', 'FinancialInstrProductCategory' ]
@EndUserText.label: 'Facility Transaction Category'
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
define view I_Ftr_Fac_Trans_Cat_Vh
  as select from at01
  association [0..*] to I_Ftr_Fac_Trans_Cat_Vh_T as _Text                          on  $projection.FinancialInstrProductCategory = _Text.FinancialInstrProductCategory
                                                                                   and $projection.FinInstrTransactionCategory   = _Text.FinInstrTransactionCategory
  association [1..1] to I_FinancialInstrProdCat  as _FinancialInstrProductCategory on  $projection.FinancialInstrProductCategory = _FinancialInstrProductCategory.FinancialInstrProductCategory
{
      @ObjectModel.text.association: '_Text'
  key at01.sfgtyp  as FinInstrTransactionCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductCategory'
  key at01.sanlfor as FinancialInstrProductCategory,
      _Text,
      _FinancialInstrProductCategory
}
where
  at01.sanlfor = '560'
```
