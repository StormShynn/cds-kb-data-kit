---
name: I_BILLGDOCREQBILLGSTSTEXT
description: "Billgdocreqbillgststext"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - text-view
  - text
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQBILLGSTSTEXT

**Billgdocreqbillgststext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillgDocReqBillgSts` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillgDocReqBillgStsDesc` |  | |  | `bezei` |  |  |
| `_BillgDocReqBillgSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgDocReqBillgSts` | `I_BillgDocReqBillgSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillgDocReqBillgSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Billing Document Request Billing Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'IBDREQBILLSTST',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillgDocReqBillgStsText
as select from tvbst

association[0..1] to I_BillgDocReqBillgSts as _BillgDocReqBillgSts on $projection.BillgDocReqBillgSts = _BillgDocReqBillgSts.BillgDocReqBillgSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillgDocReqBillgSts'
    key statu as BillgDocReqBillgSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,   
    
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    bezei as BillgDocReqBillgStsDesc,
    
    //Associations
    _BillgDocReqBillgSts,
    _Language
}
where (tvbst.tbnam = 'VBRP') and (tvbst.fdnam = 'FKSAA');
```
