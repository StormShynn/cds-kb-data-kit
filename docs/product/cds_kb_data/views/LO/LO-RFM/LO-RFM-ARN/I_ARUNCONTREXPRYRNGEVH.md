---
name: I_ARUNCONTREXPRYRNGEVH
description: "Contract expiry range values"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
