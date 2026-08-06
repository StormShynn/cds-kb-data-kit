---
name: I_CREDITSPREADID
description: Creditspreadid
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - credit
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_CREDITSPREADID

**Creditspreadid**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditSpreadID` | `CreditSpreadID.csprd_id` |
| `TextDescription` | `CreditSpreadID.description` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICREDITSPRDID'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled:true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.representativeKey: 'CreditSpreadID'
@EndUserText.label: 'Credit Spread ID'
@ObjectModel.sapObjectNodeType.name: 'CreditSpread'
define view I_CreditSpreadID
  as select from tyc_csprd_def as CreditSpreadID
{
      @ObjectModel.text.element: 'TextDescription'
      @EndUserText.label: 'Credit Spread ID'
  key CreditSpreadID.csprd_id    as CreditSpreadID,

      @Semantics.text
      @EndUserText.label: 'TextDescription'

      CreditSpreadID.description as TextDescription


}
```
