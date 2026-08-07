---
name: I_PRJBLGELMENTRDOCBILLGSTATUS
description: Prjblgelmentrdocbillgstatus
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - status
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRDOCBILLGSTATUS

**Prjblgelmentrdocbillgstatus**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentBillingStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_bdrstatus preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_PrjBlgElmEntrDocBillgStsTxt` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPBEEBDRSTATUS'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true

@Analytics.technicalName: 'IPBEEBDRSTATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Billing Status'
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrDocBillgSts'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'DocumentBillingStatus'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #TRANSACTIONAL
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP                                    

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

//@ClientHandling.algorithm: #SESSION_VARIABLE
define root view entity I_PrjBlgElmEntrDocBillgStatus
  as select from dd07l
  composition [0..*] of I_PrjBlgElmEntrDocBillgStsTxt as _PrjBlgElmEntrDocBillgStsTxt
{
  @ObjectModel.text.association: '_PrjBlgElmEntrDocBillgStsTxt'
  key cast( substring( domvalue_l, 1, 1 ) as pbee_bdrstatus preserving type ) as DocumentBillingStatus,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                                                 as DomainValue,

      _PrjBlgElmEntrDocBillgStsTxt
}
where
      domname  = 'PBEE_BDRSTATUS'
      and as4local = 'A'
```
