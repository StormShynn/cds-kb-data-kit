---
name: I_PAYMENTBLOCKLEVEL
description: Paymentblocklevel
app_component: FI-AP-AP-B-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - payment
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTBLOCKLEVEL

**Paymentblocklevel**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentBlockLevel` | `cast( dd07l.domvalue_l as farp_splev )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTBLKLVL'
@EndUserText.label: 'Payment Block Level'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Search.searchable: true
//@ObjectModel.alternativeKey: [ { id : 'Domain',
//                                 uniqueness: #UNIQUE,
//                                 element: ['DomainValue'] } ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'PaymentBlockLevel'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'PaymentBlockLevel'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_PaymentBlockLevel
  as select from dd07l
  composition [0..*] of I_PaymentBlockLevelText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as farp_splev ) as PaymentBlockLevel,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                       as DomainValue,
      _Text
}
where
      dd07l.domname  = 'SPLEV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
