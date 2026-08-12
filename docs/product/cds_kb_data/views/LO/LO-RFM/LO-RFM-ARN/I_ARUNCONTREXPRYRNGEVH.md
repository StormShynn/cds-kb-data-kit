---
name: I_ARUNCONTREXPRYRNGEVH
description: "Contract expiry range values"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNCONTREXPRYRNGEVH')/$value
semantic_en: "Contract expiry range values"
semantic_vi: "Contract expiry range values — CDS view giao diện (transactional data) dựa trên dd07v."
keywords:
  - "contract"
  - "expiry"
  - "range"
  - "values"
  - "assgmt"
  - "contr"
  - "expry"
  - "rnge"
  - "name"
tags:
  - LO
  - component:LO-RFM-ARN
  - contract
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_ARUNCONTREXPRYRNGEVH

**Contract expiry range values**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNCONTREXPRYRNGEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupAssgmtContrExpryRnge` | ✓ | |  | `substring(domvalue_l, 1, 2)` | `CHAR(2)` |  |
| `SupAssgmtContrExpryRngeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNCONTREXPRYRNGEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNCONTREXPRYRNGEVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IARNCNTRXRYRNG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SupAssgmtContrExpryRnge'
@VDM.viewType:#BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@EndUserText.label: 'Contract expiry range values'
@Metadata.ignorePropagatedAnnotations:true
define view I_ARunContrExpryRngeVH
  as select from dd07v
{
      @EndUserText.label: 'Contract Expiry Status'
      @ObjectModel.text.element: ['SupAssgmtContrExpryRngeName']
  key substring(domvalue_l, 1, 2) as SupAssgmtContrExpryRnge,
      @EndUserText.label: 'Contract Expiry Status Description'
      @Semantics.text: true
      ddtext                      as SupAssgmtContrExpryRngeName

}
where
      domname    = 'ARUN_CONTRACT_EXPIRY_RANGE'
  and ddlanguage = $session.system_language
```
