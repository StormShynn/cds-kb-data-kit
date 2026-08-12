---
name: I_FINTRANSCNTRLCLRGSTATUSTEXT
description: "This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value
semantic_en: "This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?"
semantic_vi: "Fin Trans Central Clearing Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "fin"
  - "trans"
  - "central"
  - "clearing"
  - "status"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "cntrl"
  - "clrg"
  - "name"
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
# I_FINTRANSCNTRLCLRGSTATUSTEXT

**This CDS view shows the clearing statuses available for a financial transaction that is part of the central clearing process in Treasury and Risk Management. This CDS view provides the prerequisites for answering the following business question: Which clearing statuses are available for financial transactions?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `FinTransCentralClearingStatus` | ✓ | |  | `cast( dd07t.domvalue_l as tpm_trea_clearing_status )` | `NUMC(1)` | Clearing Status (TREA) |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FinTransCntrlClrgStatusName` |  | |  | `cast( dd07t.ddtext as tpm_trea_clearing_status_name preserving type )` | `CHAR(60)` | Clearing Status Name (TREA) |
| `_CentralClearingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralClearingStatus` | `I_FinTransCntrlClrgStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNTRLCLRGSTATUSTEXT')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFTCENCLEARSTAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Central Clearing Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinTransCentralClearingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_FinTransCntrlClrgStatusText 
  as select from dd07t
  association [0..1] to I_FinTransCntrlClrgStatus as _CentralClearingStatus on $projection.FinTransCentralClearingStatus = _CentralClearingStatus.FinTransCentralClearingStatus
  association [0..1] to I_Language                as _Language              on $projection.Language                      = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language, 
      @ObjectModel.foreignKey.association: '_CentralClearingStatus'
      @ObjectModel.text.element: ['FinTransCntrlClrgStatusName']
  key cast( dd07t.domvalue_l as tpm_trea_clearing_status  )                 as FinTransCentralClearingStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as tpm_trea_clearing_status_name preserving type ) as FinTransCntrlClrgStatusName,
      
      _CentralClearingStatus,
      _Language
} 
where dd07t.domname  = 'TPM_TREA_CLEARING_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
