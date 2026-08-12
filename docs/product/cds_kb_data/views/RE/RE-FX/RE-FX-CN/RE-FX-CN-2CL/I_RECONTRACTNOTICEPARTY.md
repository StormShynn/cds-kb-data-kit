---
name: I_RECONTRACTNOTICEPARTY
description: "Recontractnoticeparty"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - contract
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTNOTICEPARTY

**Recontractnoticeparty**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractNoticeParty` | ✓ | |  | `cast(domvalue_l as recnntparty)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Contract Notice given by'
@AbapCatalog.sqlViewName: 'IRECNNTPARTY'
@ObjectModel.representativeKey: 'REContractNoticeParty'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
    }
}
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@VDM.viewType: #BASIC



define root view I_REContractNoticeParty as select from dd07l
composition [0..*] of I_REContractNoticePartyText as _Text
{

    @ObjectModel.text.association: '_Text'
    key cast(domvalue_l as recnntparty) as REContractNoticeParty,

    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,

    _Text

}
where
      domname  = 'RECNNTPARTY'
  and as4local = 'A'
  and as4vers  = '0000'
```
