---
name: I_CNTRLPURCONTRCHGREQSTATUS
description: "Cntrlpurcontrchgreqstatus"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - status
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRCHGREQSTATUS

**Cntrlpurcontrchgreqstatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgDocChangeRequestStatus` | ✓ | |  | `cast( dd07l.domvalue_l as abap.char( 2 ) )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLPCRQSTS'
@Analytics: { dataCategory: #DIMENSION ,
    dataExtraction: {
        enabled: true
    }
}
@EndUserText.label: 'Central Contract Change Request Status'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'PurgDocChangeRequestStatus',
  usageType: {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #META
    }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'CentralPurchaseContract'
define root view I_CntrlPurContrChgReqStatus
  as select from dd07l
  composition [0..*] of I_CntrlPurContrChgReqStatusTxt as _Text
{
      @ObjectModel.text.association: '_Text'

  key cast( dd07l.domvalue_l as abap.char( 2 ) ) as PurgDocChangeRequestStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                           as DomainValue,
      _Text
}
where
      dd07l.domname  = 'CR_STAT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
