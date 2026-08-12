---
name: I_CN_TAXINVOICEBINDING
description: "CN Taxinvoicebinding"
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TIM
  - interface-view
  - tax
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVOICEBINDING

**CN Taxinvoicebinding**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CN_TaxInvcBindgUUID` | ✓ | |  | `cast( _item.CN_TaxInvcBindgUUID as ficntaxinvc_bnd_uuid preserving type )` |  |  |
| `CN_TaxInvcBindgItmUUID` | ✓ | | `_item` | `CN_TaxInvcBindgItmUUID` |  |  |
| `CN_TaxInvcUUID` |  | |  | `cast( _item.CN_TaxInvcUUID as ficntaxinvc_uuid preserving type)` |  |  |
| `CN_TaxEntityID` |  | | `_item` | `CN_TaxEntityID` |  |  |
| `CN_TaxInvcBindgSrceBusObjType` |  | |  | `cast( _head.CN_TaxInvcBindgSrceBusObjType as ficntaxinvc_bnd_src_bo_type preserving type)` |  |  |
| `CN_TaxInvcBindgSrceBusObjKey` |  | | `_head` | `CN_TaxInvcBindgSrceBusObjKey` |  |  |

## Source Code

```abap
@VDM.viewType:  #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@EndUserText.label: 'China Tax Invoice Binding Information'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
}
define view entity I_CN_TaxInvoiceBinding as select from I_CN_TaxInvcBindgItm as _item
    inner join   I_CN_TaxInvcBindgHdr as _head on _item.CN_TaxInvcBindgUUID = _head.CN_TaxInvcBindgUUID

{
   key cast( _item.CN_TaxInvcBindgUUID as ficntaxinvc_bnd_uuid preserving type ) as CN_TaxInvcBindgUUID,
   
   key _item.CN_TaxInvcBindgItmUUID,
   
   cast( _item.CN_TaxInvcUUID as ficntaxinvc_uuid preserving type) as CN_TaxInvcUUID,
   
   _item.CN_TaxEntityID,
    
   cast( _head.CN_TaxInvcBindgSrceBusObjType as ficntaxinvc_bnd_src_bo_type preserving type) as CN_TaxInvcBindgSrceBusObjType,
      
    _head.CN_TaxInvcBindgSrceBusObjKey           as CN_TaxInvcBindgSrceBusObjKey
    // Split Document Number from SourceBoKey
//  case 
//    when left(_head.CN_TaxInvcBindgSrceBusObjKey, instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')-1) = 'DRAFT_K'
//      then right(_head.CN_TaxInvcBindgSrceBusObjKey, length(_head.CN_TaxInvcBindgSrceBusObjKey) - instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^'))
//    else
//      left(_head.CN_TaxInvcBindgSrceBusObjKey, instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')-1)
//  end as RelatedDocumentNumber,
//  
//  // Split Fiscal Year from SourceBoKey
//  case
//    when left(_head.CN_TaxInvcBindgSrceBusObjKey, instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')-1) = 'DRAFT_K'
//      then ''
//    else
//      left(right(_head.CN_TaxInvcBindgSrceBusObjKey, length(_head.CN_TaxInvcBindgSrceBusObjKey) - instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')), 4)
//  end as FiscalYear,
//  
//  // Split Company Code from SourceBoKey
//  case 
//    when length(_head.CN_TaxInvcBindgSrceBusObjKey) - instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^') > 4 and 
//        left(_head.CN_TaxInvcBindgSrceBusObjKey, instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')-1) <> 'DRAFT_K'
//    then right(right(_head.CN_TaxInvcBindgSrceBusObjKey, length(_head.CN_TaxInvcBindgSrceBusObjKey) - instr(_head.CN_TaxInvcBindgSrceBusObjKey, '^')), 4)
//    else ''
//  end as CompanyCode
}
```
