---
name: I_PROJBILLGREQITMSRCETYPE
description: "Projbillgreqitmsrcetype"
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
# I_PROJBILLGREQITMSRCETYPE

**Projbillgreqitmsrcetype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgReqItmSourceType` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjBillgReqItmSrceTypeText` | | ✓ | | | | |

## Source Code

```abap
@Analytics.technicalName: 'IPBRISRCETYPE'
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #DIMENSION
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Request Item Source Type'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgReqItmSourceType'
@ObjectModel.representativeKey: 'ProjBillgReqItmSourceType'
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

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define root view entity I_ProjBillgReqItmSrceType as select from dd07l
  composition [0..*] of I_ProjBillgReqItmSrceTypeText as _ProjBillgReqItmSrceTypeText
{
       @ObjectModel.text.association: '_ProjBillgReqItmSrceTypeText'
   key cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type ) as ProjBillgReqItmSourceType,

       @Analytics.hidden: true
       @Consumption.hidden: true
       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
       dd07l.domvalue_l as DomainValue,
          
       _ProjBillgReqItmSrceTypeText
}
where domname  = 'PBRI_SOURCEID' and as4local = 'A'
```
