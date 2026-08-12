---
name: I_PURGDOCUMENTPROCESSCODE
description: "Purgdocumentprocesscode"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - document
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGDOCUMENTPROCESSCODE

**Purgdocumentprocesscode**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentProcessCode` | ✓ | |  | `cast (cast(substring(dd07l.domvalue_l ,1,3) as abap.char( 3 ) ) as mmpur_process_indicator )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURDOCPCODE'
@AbapCatalog.compiler.compareFilter: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Document Process Code' 
@ObjectModel.representativeKey: 'PurchasingDocumentProcessCode' 
@ObjectModel.sapObjectNodeType.name: 'PurchasingDocumentProcessCode'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC 
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurgDocumentProcessCode 
  as select from dd07l

   composition [0..*] of I_PurgDocumentProcessCodeText as _Text 
{
   
       @ObjectModel.text.association: '_Text'
  key cast (cast(substring(dd07l.domvalue_l ,1,3) as abap.char( 3 ) ) as mmpur_process_indicator ) as PurchasingDocumentProcessCode,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                        as DomainValue,

      _Text
}
where
      domname  = 'MMPUR_PROCESS_INDICATOR'
  and as4local = 'A'
  and dd07l.as4vers = '0000'
```
