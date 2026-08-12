---
name: I_ACCOUNTINGPOSTINGSTATUS
description: "Accountingpostingstatus"
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_ACCOUNTINGPOSTINGSTATUS

**Accountingpostingstatus**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingPostingStatus` | ✓ | |  | `cast( dd07l.domvalue_l as buchk )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingPostingStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BillingDocAcctgPostingStatus'
@ObjectModel.representativeKey: 'AccountingPostingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Accounting Posting Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDACCTPOSTGSTS',
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true

define view I_AccountingPostingStatus
as select from dd07l

association [0..*] to I_AccountingPostingStatusText as _Text on $projection.AccountingPostingStatus = _Text.AccountingPostingStatus
{
    @ObjectModel.text.association: '_Text'
    key cast( dd07l.domvalue_l as buchk ) as AccountingPostingStatus,    
    
    //Associations
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
