---
name: I_ORGANIZATIONALCHANGETEXTTP
description: "Organizationalchangetexttp"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - transactional-processing
  - text
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGANIZATIONALCHANGETEXTTP

**Organizationalchangetexttp**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChange` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `OrganizationalChangeName` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_OrganizationalChange` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label:                      'Organizational Change - Text TP'
@AccessControl.authorizationCheck:       #MANDATORY // old #check ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder

//@Metadata.allowExtensions:             true //ATC
@Metadata.ignorePropagatedAnnotations:   true

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // Wg. ATC
@ObjectModel.dataCategory:               #TEXT  //Wg. ATC
@ObjectModel.modelingPattern:            #TRANSACTIONAL_INTERFACE

//------------------------------------------------------------------


define view entity I_OrganizationalChangeTextTP
  as projection on R_OrganizationalChangeTextTP as OrganizationalChangeText

{
  key OrganizationalChange,
      
      @Semantics.language
  key Language,
      
      @Semantics.text
      OrganizationalChangeName,

      LastChangeDateTime,

      LastChangedByUser,

      _OrganizationalChange : redirected to parent I_OrganizationalChangeTP

}
```
