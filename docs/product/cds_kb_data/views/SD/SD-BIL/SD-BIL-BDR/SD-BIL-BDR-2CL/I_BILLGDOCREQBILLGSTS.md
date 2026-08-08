---
name: I_BILLGDOCREQBILLGSTS
description: "Billgdocreqbillgsts"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQBILLGSTS

**Billgdocreqbillgsts**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillgDocReqBillgSts` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillgDocReqBillgStsText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BillingDocRequestBillingStatus'
@ObjectModel.representativeKey: 'BillgDocReqBillgSts'
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
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Billing Document Request Billing Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IBDREQBILLSTS'
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillgDocReqBillgSts
as select from dd07l

association [0..*] to I_BillgDocReqBillgStsText as _Text on $projection.BillgDocReqBillgSts = _Text.BillgDocReqBillgSts
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as BillgDocReqBillgSts,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    //Associations
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
