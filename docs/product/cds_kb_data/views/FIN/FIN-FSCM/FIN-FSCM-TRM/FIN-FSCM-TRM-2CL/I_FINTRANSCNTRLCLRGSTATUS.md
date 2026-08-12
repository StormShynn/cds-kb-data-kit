---
name: I_FINTRANSCNTRLCLRGSTATUS
description: "This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUS')/$value
semantic_en: "This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?"
semantic_vi: "Financial Transaction Central Clearing Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "financial"
  - "transaction"
  - "central"
  - "clearing"
  - "status"
  - "trans"
  - "domain"
  - "value"
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
# I_FINTRANSCNTRLCLRGSTATUS

**This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransCentralClearingStatus` | ✓ | |  | `cast( dd07l.domvalue_l as tpm_trea_clearing_status )` | `NUMC(1)` | Clearing Status (TREA) |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinTransCntrlClrgStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUS')/$value)*

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AbapCatalog.sqlViewName: 'IFTCENCLEARSTA'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Financial Transaction Central Clearing Status'
@Metadata.allowExtensions:true 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinTransCentralClearingStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'FinTransCentralClearingStatus'
define view I_FinTransCntrlClrgStatus 
  as select from dd07l
  association [0..*] to I_FinTransCntrlClrgStatusText as _Text on $projection.FinTransCentralClearingStatus = _Text.FinTransCentralClearingStatus
{
  @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as tpm_trea_clearing_status ) as FinTransCentralClearingStatus,

  @Analytics.hidden: true
  @Consumption.hidden: true
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  dd07l.domvalue_l                                         as DomainValue,
  
  _Text
}
where
      dd07l.domname  = 'TPM_TREA_CLEARING_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
