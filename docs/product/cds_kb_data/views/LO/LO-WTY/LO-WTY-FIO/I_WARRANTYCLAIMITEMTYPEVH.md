---
name: I_WARRANTYCLAIMITEMTYPEVH
description: "Warrantyclaimitemtypevh"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - value-help
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WARRANTYCLAIMITEMTYPEVH

**Warrantyclaimitemtypevh**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyItemType` | ✓ | |  | `poskt_cust` |  |  |
| `WarrantyClaimType` | ✓ | | `_WrntyClaimType` | `clmty` |  |  |
| `WrntyControllingItemType` |  | |  | `poskt` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimType` | `cwty001` | [1..*] |
| `_Text` | `I_WrntyClaimItemTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Item type based on claim type'
@ObjectModel:{
    representativeKey: 'WarrantyClaimType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        //serviceQuality  : #C,//*******Modernization Task********
        serviceQuality: #A,
        sizeCategory    : #S
        },

   supportedCapabilities: [                          
                            #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, 
                            #CDS_MODELING_DATA_SOURCE, 
                            #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #VALUE_HELP_PROVIDER
   
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
        
            dataExtraction.enabled: true,
            internalName: #LOCAL
  } 
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWRNTYITEMTYP'
@VDM: {
  viewType: #BASIC,//*******Modernization Task********
  //viewType :#COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_WarrantyClaimItemTypeVH 
 as select from cwty011
  inner join cwty012z as _WrntytypeGroup on cwty011.poskt_cust = _WrntytypeGroup.poskt_cust
  association [1..*] to cwty001  as _WrntyClaimType on _WrntytypeGroup.poskt_grp = _WrntyClaimType.poskt_grp
  association [1..*] to I_WrntyClaimItemTypeText as _Text on $projection.WarrantyItemType = _Text.WarrantyItemType
 
{


  key  cwty011.poskt_cust                    as WarrantyItemType,
  key  _WrntyClaimType.clmty as WarrantyClaimType ,
//      _WrntytypeGroup.poskt_grp,
       cwty011.poskt                         as WrntyControllingItemType,
       _Text
    
      

}
where
      cwty011.poskt != 'TXT'
  and cwty011.poskt != 'EXP'
```
