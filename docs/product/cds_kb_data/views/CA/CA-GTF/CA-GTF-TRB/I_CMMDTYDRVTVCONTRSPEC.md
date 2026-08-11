---
name: I_CMMDTYDRVTVCONTRSPEC
description: "DCS LOF Commodity Currency"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value
semantic_en: "DCS LOF Commodity Currency"
semantic_vi: "DCS LOF Commodity Currency — CDS view giao diện dựa trên tbac_dcs_cty."
keywords:
  - "dcs"
  - "lof"
  - "commodity"
  - "currency"
  - "curve"
  - "drvtv"
  - "contr"
  - "spec"
  - "valid"
  - "condition"
  - "term"
  - "rate"
tags:
  - CA
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - interface-view
  - lob:cross_application components
---
# I_CMMDTYDRVTVCONTRSPEC

**DCS LOF Commodity Currency**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityCurveDrvtvContrSpec` | ✓ | |  | `dcsid` | `CHAR(20)` | Derivative Contract Specification ID |
| `ValidFrom` |  | |  | `validfrom` | `DATS(8)` | Derivative Contract Specification: Valid From |
| `ConditionTermRateMktCurrency` |  | |  | `quot_curr` | `CUKY(5)` | Quotation Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYDRVTVCONTRSPEC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICMMDRVTVCONTSPC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName:#LOCAL }
@Metadata: { ignorePropagatedAnnotations:true, allowExtensions:true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'CommodityCurveDrvtvContrSpec'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
@EndUserText.label: 'DCS LOF Commodity Currency'
define view I_CmmdtyDrvtvContrSpec as select from tbac_dcs_cty
{
   key dcsid as CommodityCurveDrvtvContrSpec,   
   //@Semantics.businessDate.from: true
       validfrom as ValidFrom,
       quot_curr as ConditionTermRateMktCurrency  
}
```
