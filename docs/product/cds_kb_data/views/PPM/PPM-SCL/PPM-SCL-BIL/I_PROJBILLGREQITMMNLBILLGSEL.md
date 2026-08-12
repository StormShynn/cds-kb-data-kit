---
name: I_PROJBILLGREQITMMNLBILLGSEL
description: "Projbillgreqitmmnlbillgsel"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PROJBILLGREQITMMNLBILLGSEL

**Projbillgreqitmmnlbillgsel**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManualBillgSelForPrjBlgReqItem` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_PrjBlgReqItmMnlBillgSelText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Prj Billg Req Itm Mnl Billg Selection'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPBRMNLBLGSEL'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.sapObjectNodeType.name: 'ManualBillgSelForPrjBlgReqItem'
@ObjectModel.representativeKey: 'ManualBillgSelForPrjBlgReqItem'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S, 
    dataClass: #META  
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,                                    
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP                                    
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true


define root view entity I_ProjBillgReqItmMnlBillgSel as select from dd07l
  composition [0..*] of I_PrjBlgReqItmMnlBillgSelText as _PrjBlgReqItmMnlBillgSelText
{
      
       @ObjectModel.text.association: '_PrjBlgReqItmMnlBillgSelText'
   key cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type ) as ManualBillgSelForPrjBlgReqItem,
  
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07l.domvalue_l as DomainValue,
       
       @Search.defaultSearchElement: true
       _PrjBlgReqItmMnlBillgSelText

} where domname = 'PBRI_SELECTION ' and as4local = 'A'
```
