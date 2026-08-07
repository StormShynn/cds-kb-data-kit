---
name: I_LOCATIONBASIC_2
description: Locationbasic 2
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-TN
  - interface-view
  - component:TM-MD-TN-LOC-2CL
  - lob:Other
---
# I_LOCATIONBASIC_2

**Locationbasic 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LocationUUID` | ✓ | |  | `cast( locid as /sapapo/location_id preserving type )` |
| `LocationAdditionalUUID` |  | |  | `cast( loc_uuid as /sapapo/location_uuid preserving type )` |
| `Location` |  | |  | `locno` |
| `LocationType` |  | |  | `loctype` |
| `LocationTimeZone` |  | |  | `cast ( tzone as tznzone preserving type )` |
| `LocationUNCode` |  | |  | `unlocode` |
| `LocationAirportCode` |  | |  | `cast(iatacode as /scmtms/vdm_loc_airportcode preserving type )` |
| `AddressID` |  | |  | `adrnummer` |
| `GeoCoordinatesUnit` |  | |  | `cast('DEG' as /scmtms/vdm_geo_cood_unit)` |
| `Longitude` |  | |  | `xpos` |
| `Latitude` |  | |  | `ypos` |
| `GeoCoordsValidityEndDateTime` |  | |  | `cast( geo_validity_end as /scmtms/vdm_loc_geo_val_end_dt preserving type )` |
| `GeoCoordinatesLevel` |  | |  | `gc_level` |
| `GeoCoordinatesStrategy` |  | |  | `strategy` |
| `GeoCoordinatesMatchPercent` |  | |  | `match_gc` |
| `GeoCoordinatesDataSource` |  | |  | `srcid` |
| `GeoCoordinatesPrecision` |  | |  | `precisid` |
| `GeoCoordsAreManuallyChanged` |  | |  | `manually_changed_gc` |
| `IsBusinessPurposeCompleted` |  | |  | `loc_xblck` |
| `BusinessPartnerUUID` |  | |  | `partner_guid` |
| `CreationDateTime` |  | |  | `cast (createutc as /scmtms/vdm_creation_datetme preserving type )` |
| `CreatedByUser` |  | |  | `createuser` |
| `ChangedDateTime` |  | |  | `cast ( changeutc as /scmtms/vdm_changed_datetme preserving type )` |
| `LastChangedByUser` |  | |  | `changeuser` |
| `_LocationType` | | ✓ | | |
| `_AddrDfltRprstn` | | ✓ | | |
| `_LocAddressDataText` | | ✓ | | |
| `_PostalAddrDfltRprstn` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocationType` | `I_LocationType_2` | [0..1] |
| `_AddrDfltRprstn` | `I_AddressDefaultRepresentation` | [0..1] |
| `_LocAddressDataText` | `I_LocationAddressDataText` | [0..1] |
| `_PostalAddrDfltRprstn` | `I_AddrOrgNamePostalAddress` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Extension` | `E_LocationBasic` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Location'
@ObjectModel:     { sapObjectNodeType.name: 'Location',
                    representativeKey: 'LocationUUID',
                    semanticKey: [ 'Location' ],
                     usageType:{
                                 serviceQuality: #A,
                                 sizeCategory: #L,
                                 dataClass: #MASTER   }, 
                                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl:{ authorizationCheck: #MANDATORY,
                 privilegedAssociations:  [ '_AddrDfltRprstn' , '_PostalAddrDfltRprstn' ],
                 personalData:{ blocking: #REQUIRED,
                                blockingIndicator: [ 'IsBusinessPurposeCompleted','_BusinessPartner.IsBusinessPurposeCompleted' ]  } }
                 

@Metadata:{ allowExtensions:    true,
            ignorePropagatedAnnotations: true }

@VDM:{ viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }


/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define root view entity I_LocationBasic_2
  as select from /sapapo/loc
  /* Foreign Key and Text Associations */
  composition [0..*] of I_LocationBasicText_2          as _Text
  association [0..1] to I_LocationType_2               as _LocationType         on  $projection.LocationType = _LocationType.LocationType
  association [0..1] to I_AddressDefaultRepresentation as _AddrDfltRprstn       on  $projection.AddressID = _AddrDfltRprstn.AddressID
  association [0..1] to I_LocationAddressDataText      as _LocAddressDataText   on $projection.LocationUUID = _LocAddressDataText.LocationUUID
  /*
     I_AddrOrgNamePostalAddress selects directly from ADRC table thus enabling
     consumers with multiple locations to use this association to get the address details
     ( For usage refer I_TmLocationDescription and it's consumers )
  */
  association [0..1] to I_AddrOrgNamePostalAddress     as _PostalAddrDfltRprstn on  $projection.AddressID                           = _PostalAddrDfltRprstn.AddressID
                                                                                and _PostalAddrDfltRprstn.AddressRepresentationCode is initial
  association [0..1] to I_BusinessPartner              as _BusinessPartner      on  $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID
  association [0..1] to E_LocationBasic                as _Extension            on  $projection.LocationUUID = _Extension.LocationUUID
{


      /* Location Basic Info */
      @ObjectModel.text.association: '_Text'
  key cast( locid as /sapapo/location_id preserving type )                       as LocationUUID,
      cast( loc_uuid as /sapapo/location_uuid preserving type )                  as LocationAdditionalUUID,
      /* start suppress warning shlporigin_not_inherited */
      locno                                                                      as Location,
      @ObjectModel.foreignKey.association: '_LocationType'
      loctype                                                                    as LocationType,
      cast ( tzone as tznzone preserving type )                                  as LocationTimeZone,
      unlocode                                                                   as LocationUNCode,
      cast(iatacode as /scmtms/vdm_loc_airportcode preserving type )             as LocationAirportCode,
      /* end suppress warning shlporigin_not_inherited */

      /* Address */
      @ObjectModel.foreignKey.association: '_AddrDfltRprstn'
      adrnummer                                                                  as AddressID,

      /* Geocodes */
      cast('DEG' as /scmtms/vdm_geo_cood_unit)                                   as GeoCoordinatesUnit,
      @Semantics.geoLocation.longitude: true
      @Aggregation.default: #MIN
      @Semantics.quantity.unitOfMeasure: 'GeoCoordinatesUnit'
      xpos                                                                       as Longitude,
      @Semantics.geoLocation.latitude: true
      @Aggregation.default: #MIN
      @Semantics.quantity.unitOfMeasure: 'GeoCoordinatesUnit'
      ypos                                                                       as Latitude,
      @Semantics.dateTime:true
      cast( geo_validity_end as /scmtms/vdm_loc_geo_val_end_dt preserving type ) as GeoCoordsValidityEndDateTime,
      gc_level                                                                   as GeoCoordinatesLevel,
      strategy                                                                   as GeoCoordinatesStrategy,
      match_gc                                                                   as GeoCoordinatesMatchPercent,
      srcid                                                                      as GeoCoordinatesDataSource,
      //    gis_zone                                                                   as GeogrlInformationSystemZone,
      precisid                                                                   as GeoCoordinatesPrecision,
      manually_changed_gc                                                        as GeoCoordsAreManuallyChanged,


      /* Business Purpose and Partner */
      @Semantics.booleanIndicator: true
      loc_xblck                                                                  as IsBusinessPurposeCompleted,
      partner_guid                                                               as BusinessPartnerUUID,

      /* Administrative Data */
      @Semantics.systemDateTime.createdAt: true
      cast (createutc as /scmtms/vdm_creation_datetme preserving type )          as CreationDateTime,
      @Semantics.user.createdBy: true
      createuser                                                                 as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      cast ( changeutc as /scmtms/vdm_changed_datetme preserving type )          as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      changeuser                                                                 as LastChangedByUser,

      /* Associations */
      _Text,
      _LocationType,
      _AddrDfltRprstn,
      _PostalAddrDfltRprstn,
      _LocAddressDataText,
      _BusinessPartner
}

where
  loctype = '1003'
  or /* Shipping Point                   */
  loctype = '1021'
  or /* Business Partner                 */
  loctype = '1100'
  or /* Port                             */
  loctype = '1110'
  or /* Airport                          */
  loctype = '1120'
  or /* Railway Station                  */
  loctype = '1190'
  or /* Rail Junction                    */
  loctype = '1200' /* Loading Point                    */;
```
